const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const creatorService = require('../service/creatorService');

module.exports = {
    readAllCreators: async (req, res) => {
        const {
            user
        } = req.body;

        if (!user) {
            console.log('필요한 값이 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        try {
            const creators = await creatorService.getAllCreators();
            if (!creators) {
                console.log('creators 테이블이 비어있습니다.');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CREATOR_ALL_SUCCESS, creators));
        } catch (error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    }
}