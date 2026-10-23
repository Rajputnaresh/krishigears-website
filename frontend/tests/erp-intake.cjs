const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ts = require('typescript');
const { webcrypto } = require('node:crypto');
const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib/erp-intake.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
async function run() {
  let release;
  const exports = {};
  const ctx = vm.createContext({ exports, process: { env: { CRM_WEBHOOK_SECRET: 'scratch-only' } },
    crypto: webcrypto, Request, Response, AbortController, setTimeout, clearTimeout,
    fetch: () => new Promise(resolve => { release = resolve; }) });
  vm.runInContext(code, ctx);
  const request = () => new Request('https://example.org/api/leads/dealer', {
    method: 'POST', body: JSON.stringify({ phone: '9876543210', full_name: 'Fixture', source: 'spoofed' }) });
  let finished = false;
  const pending = exports.submitErpLead(request(), 'dealer').then(r => { finished = true; return r; });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(finished, false, 'Receipt must wait for ERP persistence');
  release(Response.json({ status: 'success', lead: { public_id: 'KGL-FIXTURE-ONLY' } }));
  assert.equal((await (await pending).json()).id, 'KGL-FIXTURE-ONLY');
  ctx.fetch = async () => Response.json({ status: 'error' }, { status: 503 });
  const failed = await exports.submitErpLead(request(), 'dealer');
  assert.equal(failed.status, 503);
  assert.equal((await failed.json()).success, false);
  ctx.process.env.CRM_WEBHOOK_SECRET = '';
  assert.equal((await exports.submitErpLead(request(), 'dealer')).status, 503);
  console.log('PASS: receipts wait for ERP; upstream failure and missing credentials fail visibly.');
}
run().catch(e => { console.error(e); process.exitCode = 1; });
