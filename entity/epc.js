module.exports = class Epc {
    constructor(
        epc = "",
        cycle = "",
        created_by = "",
        created_at = "",
        updated_at = "",
        updated_by = "",
        status = "",
        disable_end = "",
        remark = "",
        type = ""
    ) {
        this.epc = epc
        this.cycle = cycle
        this.created_at = created_at
        this.created_by = created_by
        this.updated_at = updated_at
        this.updated_by = updated_by
        this.status = status
        this.disable_end = disable_end
        this.remark = remark
        this.type = type
    }
    get type() {
        return this.type
    }
    get epc() {
        return this.epc
    }
    get cycle() {
        return this.cycle
    }
    get created_by() {
        return this.created_by
    }
    get created_at() {
        return this.created_at
    }
    get updated_at() {
        return this.updated_at
    }
    get updated_by() {
        return this.updated_by
    }
    get status() {
        return this.status
    }
    get disable_end() {
        return this.disable_end
    }
    get remark() {
        return this.remark
    }
    set type(value) {
        this.type = value
    }
    set epc(value) {
        this.epc  = value 
    }
    set cycle(value) {
        this.cycle = value
    }
    set created_by(value) {
        this.created_by = value
    }
    set created_at(value) {
        this.created_at = value
    }
    set updated_by(value) {
        this.updated_by = value
    }
    set updated_at(value) {
        this.updated_at
    }
    set status(value) {
        this.status = value
    }
    set disable_end(value) {
        this.disable_end = value
    }
    set remark(value) {
        this.remark = value
    }
}