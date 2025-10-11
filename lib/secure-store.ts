import * as SecureStore from 'expo-secure-store';


export const save_to_store = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value,);
}

export const retrieve_from_store = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    return result
}
