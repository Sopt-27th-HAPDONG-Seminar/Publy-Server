const util = require('../modules/util');
//const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
//const { userService } = require('../service');
const { Alert } = require('../models/alert');

module.exports = {
    // 알림 갯수 가져오기
    alert: async (req, res) => {
        try {
            const users = await Alert.findAll({
                //attributes: ['id', 'email', 'userName'],
            });
            console.log(users);
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.USER_READ_ALL_SUCCESS, users));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.USER_READ_ALL_FAIL));
        }
    },

}