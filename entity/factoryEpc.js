const SkidTag = require("./skidTag");

class FactoryEpc {
    static createSkidTag() {
        return new SkidTag()
    }
}