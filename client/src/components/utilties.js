export default async function apiCall(url, payload) {

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': localStorage.getItem('token') || ''
        },
        body: JSON.stringify(payload)
    }).then((t) => t.json());

    return res;
}
//Type annotations can only be used in TypeScript