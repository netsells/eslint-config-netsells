class Utils {
    /**
     * constructor
     */
    constructor() {
        this.NODE_ENV = process.env.NODE_ENV;
    }

    /**
     * isProduction - returns true if NODE_ENV is set to production
     * @returns {boolean}
     */
    isProduction() {
        return this.NODE_ENV === 'production';
    }
}

module.exports = new Utils();