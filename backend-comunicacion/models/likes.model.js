const pool = require('../db/connection');

class LikesModel{
    constructor(){
        this.db = pool;
    }

    async addLike(postId){
        const [result] = await this.db.execute(
            'UPDATE posts SET likes = likes + 1 WHERE id = ?',
            [postId]
        );
        return result;
    }

    async removeLike(postId){
        const [result] = await this.db.execute(
            'UPDATE posts SET likes = likes - 1 WHERE id = ?',
            [postId]
        );
        return result;
    }
}

module.exports = LikesModel