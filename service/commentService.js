const { Comment } = require('../models');

module.exports = {
    getComments: async () => {
        try {
            const comments = await Comment.findAll({
                attributes: ['title'],
            });
            return comments;
        } catch (error) {
            throw error;
        }
    }
}