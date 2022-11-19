import zxcvbn from 'zxcvbn';

export const PasswordStrengthChecker = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#FF6596';
      case 1:
        return '#FF6596';
      case 2:
        return '#ffff33';
      case 3:
        return '#ffff33';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '4px',
    borderRadius: '20px',
    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
  });

  return (
    <>
      <div
        style={{
          marginTop: '5px',
          background: '#E5F1EF',
          border: '1px solid #E5F1EF',
          borderRadius: '20px',
        }}
      >
        <div style={changePasswordColor()}></div>
      </div>
    </>
  );
};
