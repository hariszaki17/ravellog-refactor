const Epc = require('./epc')
module.exports = class SkidTag extends Epc{
    constructor(
        epc,
        cycle,
        created_by,
        created_at,
        updated_at,
        updated_by,
        status,
        disable_end,
        remark
    ) {
        super(
            epc,
            cycle,
            created_by,
            created_at,
            updated_at,
            updated_by,
            status,
            disable_end,
            remark,
            "skid"
        )
    }
}