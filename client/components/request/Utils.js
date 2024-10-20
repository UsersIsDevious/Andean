export const triggerTemporaryChange = (setExecuted, buttonKey, duration = 3000) => {
    setExecuted(prevState => ({
      ...prevState,
      [buttonKey]: true
    }));
  
    setTimeout(() => {
      setExecuted(prevState => ({
        ...prevState,
        [buttonKey]: false
      }));
    }, duration);
};
  
  export const handleApiRequest = async (url, method = 'POST', body = null) => {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
    };
    if (body) options.body = JSON.stringify(body);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Request failed');
      return response;
    } catch (error) {
      console.error(`${url} request failed:`, error);
      throw error;
    }
};
  