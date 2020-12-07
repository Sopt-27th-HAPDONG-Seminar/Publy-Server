const {
    Creator
} = require('../models');

module.exports = {
    getAllCreators: async () => {
        try {
            const creators = await Creator.findAll({
                attributes: ['profileUrl', 'name', 'company', 'role', 'tag', 'ifSubscription'],
            });
            creators.map(item => item.tag = item.tag.split(';'));
            return creators;
        } catch (error) {
            throw error;
        }
    },

    getNewCreators: async () => {
        try {
            const creators = await Creator.findAll({
                where: {
                    ifNew: 1,
                },
                attributes: ['profileUrl'],
            });
            return creators;
        } catch (error) {
            throw error;
        }
    }
}