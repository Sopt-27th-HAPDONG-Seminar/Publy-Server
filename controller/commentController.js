const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

const { commentService } = require('../service/commentService');
const { URITooLong } = require('http-errors');

module.exports = {
    // 알림 갯수 가져오기
    readComments: async (req, res) => {
        // 요청 Body
        const {
            user
        } = req.body;

        if (!user) {
            console.log('필요한 값이 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }

        try {
            const alerts = await commentService.getComments();
            if (!alerts) {
                console.log('alert 테이블이 비어있습니다');
            }
            
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "알림 조회 성공", alerts));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));  
          }      
    },
}