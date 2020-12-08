const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

const commentService = require('../service/commentService');
const { URITooLong } = require('http-errors');

module.exports = {
    // 알림 갯수 가져오기
    readComments: async (req, res) => {

        try {
            const comments = await commentService.getComments();
            if (!comments) {
                console.log('comments 테이블이 비어있습니다');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "커멘트 조회 성공", comments));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));  
          }      
    },
}