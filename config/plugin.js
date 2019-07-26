'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    mongoose: {
        enable: true,
        package: 'egg-mongoose'
    },

    validate: {
        package: 'egg-validate'
    },

    userrole: {
        package: 'egg-userrole'
    },

    cors: {
        enable: true,
        package: 'egg-cors'
    },

    redis: {
        enable: true,
        package: 'egg-redis',
    },

    elasticsearch2: {
        enable: true,
        package: 'egg-elasticsearch2',
    }
};
