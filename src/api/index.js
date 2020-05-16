import { stringify } from "qs"

export function stringifyURL(str, options) {
    if (!str) {
      return str;
    }
    return str.replace(/:([A-Z|a-z]+)/gi, function(match, p1) {
      var replacement = options[p1];
      if (replacement === undefined) {
        throw new Error(
          'Could not find url parameter ' + p1 + ' in passed options object'
        );
      }
      return replacement;
    });
  }
  
export function fetchPost(url, options) {
    url = stringifyURL(url, options.body);
    if (options && options.body && options.body !== '') {
        options.body = JSON.stringify(options.body);
    }
    return fetch(
        url,
        Object.assign(
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    Pragma: 'no-cache',
                },
                method: 'POST',
                mode: 'cors',
            },
            options
        )
    )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
        console.log(err)
    });
}

export function fetchGet(url, options) {
    if (options && options.body && options.body !== '') {
        url = [stringifyURL(url, options.body), stringify(options.body)].join(
            url.indexOf('?') > 0 ? '&' : '?'
        );
    }
    options && delete options.body;
    return fetch(
        url,
        Object.assign({},
            { method: 'GET' },
            options
        )
    )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
        console.log(err)
    });
}

export const ip = "127.0.0.1"
export const post = "8080"
export const redisPost = "6379"
  
  
  