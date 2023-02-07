export const getStorageData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data;
  } catch (e) {
    console.log("something went wrong with getStorageData()");
  }
};

export const saveStorageData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log("something went wrong with saveStorageData()");
  }
};

export const removeStorageData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log("something went wrong with removeStorageData()");
  }
};
