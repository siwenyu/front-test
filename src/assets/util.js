

function fetchData({url, params}) {
    return new Promise((resolve, reject) => {
        const strParams = (params) => {
            const keys = Object.keys(params);
            const keysLen = keys.length;
            return keys.reduce((pre, cur, index) => {
                const value = params[cur];
                const flag = index !== keysLen - 1 ? '&' : '';
                return `${pre}${cur}=${value}${flag}`;
            }, '');
        }
        
        // 动态创建script标签
        let script = document.createElement('script');
        // 接口返回的数据获取
        window.jsonpCb = (res) => {
            document.body.removeChild(script);
            delete window.jsonpCb;
            resolve(res);
        }
        script.src = `${url}?${strParams(params)}&callback=jsonpCb`;
        document.body.appendChild(script);
    })
};


let aa = 11;

export {
    aa, fetchData
}

