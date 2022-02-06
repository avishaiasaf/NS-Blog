const utils = {};

utils.processRoute = (route) =>{
    return route.toLowerCase().replaceAll(' ', '-');
}

utils.blogName = 'NetSuite Pro'

export default utils;