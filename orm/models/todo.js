module.exports = function(sequelize, Datatypes) {
    var Todo = sequelize.define("Todo", {
        test: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo
};