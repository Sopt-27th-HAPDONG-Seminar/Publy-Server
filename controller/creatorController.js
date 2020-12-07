const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
//const { userService } = require('../service');
const { Creator } = require('../models');

module.exports = {
    // 새로운 코멘트 가져오기
    readNewCreatorProfile: async (req, res) => {
        try {
            const alerts = await Creator.findAll({
                attributes: ['id', 'alert'],
            });
            console.log(alerts);
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "알림 조회 성공", alerts));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "알림 조회 실패"));
        }
    },

}