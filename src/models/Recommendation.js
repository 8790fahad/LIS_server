export default (sequelize, DataTypes) => {
  const Recommendation = sequelize.define('Recommendation', {
    term:DataTypes.STRING,
    proposed_dev:DataTypes.STRING, 
    annual_rent:DataTypes.STRING, 
    dev_charges:DataTypes.STRING,
    survey_charges:DataTypes.STRING,
    proposed_dev_time:DataTypes.STRING,
    submittedBy:DataTypes.STRING,
    submittedDate:DataTypes.STRING,
    status:DataTypes.STRING,
    approvedBy:DataTypes.STRING,
    approvedDate:DataTypes.STRING,  
    stampedBy:DataTypes.STRING,
    stampDate:DataTypes.STRING,
  });
  return Recommendation;
};