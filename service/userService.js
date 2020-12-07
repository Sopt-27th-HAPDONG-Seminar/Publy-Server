const {
    Creator,
} = require('../models');

module.exports = {
    getSubscription: async () => {
        try {
            const creators = await Creator.findAll({
                attributes: ['profileUrl', 'name', 'company', 'role', 'tag', 'ifNew'],
            });
            creators.map(item => item.tag = item.tag.split(';'));
            return creators;
        } catch (error) {
            throw error;
        }
    },
}