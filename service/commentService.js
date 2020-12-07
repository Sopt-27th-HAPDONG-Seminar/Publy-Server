const { Comment, Creator } = require('../models');

module.exports = {
    getComments: async () => {
        try {
            const comments = await Comment.findAll({
                attributes: ['title', 'description', 'articleImageUrl', 'articleTitle', 'articleSource', 'saveCount', 'createdAt'],
                include: [{
                    model: Creator,
                    attributes: ['id', 'profileUrl', 'name', 'role', 'company']
                }]
            });
            return comments;
        } catch (error) {
            throw error;
        }
    }
}