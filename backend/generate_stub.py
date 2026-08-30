import pickle

data = {
    'districts': {
        'Jaipur': {'state': 'Rajasthan', 'population': 3000000, 'key_crops': ['Wheat'], 'soil_type': 'Sandy', 'farming_profile': 'Dry'},
        'Pune': {'state': 'Maharashtra', 'population': 3100000, 'key_crops': ['Sugarcane'], 'soil_type': 'Black', 'farming_profile': 'Irrigated'},
        'Nagpur': {'state': 'Maharashtra', 'population': 2400000, 'key_crops': ['Cotton'], 'soil_type': 'Black', 'farming_profile': 'Irrigated'}
    },
    'states_crops': {
        'Maharashtra': ['Cotton', 'Soybean'],
        'Rajasthan': ['Wheat', 'Mustard']
    },
    'state_tehsils': {
        'Maharashtra': {'Pune': ['Haveli', 'Maval'], 'Nagpur': ['Kamptee']},
        'Rajasthan': {'Jaipur': ['Amer', 'Sanganer']}
    }
}

with open('/tmp/districts_data.pkl', 'wb') as f:
    pickle.dump(data, f)
print("Stub updated at /tmp/districts_data.pkl")
