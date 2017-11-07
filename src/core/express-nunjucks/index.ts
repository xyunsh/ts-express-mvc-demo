import * as nunjucks from 'nunjucks';

export default function(path, opts){
    const env = nunjucks.configure(path,opts);

    const filters = opts.filters;
    if (filters) {
        Object.keys(filters).forEach(name => {
            env.addFilter(name, filters[name]);
        });
    }

    return env;
}