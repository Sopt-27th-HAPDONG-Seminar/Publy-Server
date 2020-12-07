const { Creator, Alert } = require('../models');

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
    getAlert: async () => {
        try {
            const alert = await Alert.findAll({
                attributes: ['alert'],
            });
            return alert
        } catch (error) {
            throw error;
        }
    }
}