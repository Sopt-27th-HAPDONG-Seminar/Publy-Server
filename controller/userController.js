const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

const { userService, } = require('../service');
const { URITooLong } = require('http-errors');

module.exports = {
    // 알림 갯수 가져오기
    alert: async (req, res) => {

        try {
            const alerts = await userService.getAlert()
            if (!alerts) {
                console.log('alert 테이블이 비어있습니다');
            }
            
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "알림 조회 성공", alerts));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));  
          }      
    },
    subscription: async (req, res) => {
        try {
            const creators = await userService.getSubscription()
            if (!creators) {
                console.log('creators 테이블이 비어있습니다.');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_SUBSCRIBED_CREATOR_SUCCESS, creators));
        } catch (error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    }
}