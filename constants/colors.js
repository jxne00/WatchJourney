/**
 * @description: Sets the primary and secondary colors based on theme
 */
const setColor = (theme) => {
  switch (theme) {
    case 'light':
      return {
        PRIMARY_COL: '#74369D',
        SECONDARY_COL: '#D7DCEA',
      };
    case 'dark':
      return {
        PRIMARY_COL: '#400142',
        SECONDARY_COL: '#191D23',
      };
    default:
      return {
        PRIMARY_COL: '#74369D',
        SECONDARY_COL: '#D7DCEA',
      };
  }
};

export default setColor;
