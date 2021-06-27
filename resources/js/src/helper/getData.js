

export const getData = async( option ) => {
        
    const url = `http://apimundopacifico.test:8080/api/${option}`
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data;
}