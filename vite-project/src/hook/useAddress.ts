import { useState, useEffect } from 'react';
import { fetchCities, fetchDistricts } from '../services/api/addressApi';
import { AddressParams } from '../types/AddressTypes';

export const useAddress = () => {
    const [cities, setCities] = useState<AddressParams[]>([]);
    const [districts, setDistricts] = useState<AddressParams[]>([]);
    const [selectedCity, setSelectedCity] = useState<AddressParams | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<AddressParams | null>(null);
    const [query, setQuery] = useState('');
    const [error, setError] = useState<string>();

    useEffect(() => {
        // Lấy danh sách thành phố
        fetchCities()
          .then(response => setCities(response.data))
          .catch(error => setError('Failed to fetch cities: ' + error.message));
      }, []);
    
    useEffect(() => {
        if (!selectedCity) return;
        // Lấy danh sách quận/huyện khi chọn thành phố
        fetchDistricts(selectedCity.code)
          .then(response => setDistricts(response.data))
          .catch(error => setError('Failed to fetch districts: ' + error.message));
      }, [selectedCity]);
    console.log("cities", cities)
    const filteredCities = query === '' ? cities : cities.filter(city =>
        city.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredDistricts = query === '' ? districts : districts.filter(district =>
        district.name.toLowerCase().includes(query.toLowerCase())
    );

    return {
        cities,
        districts,
        selectedCity,
        setSelectedCity,
        selectedDistrict,
        setSelectedDistrict,
        filteredCities,
        filteredDistricts,
        query,
        setQuery,
        error,
    };
};
