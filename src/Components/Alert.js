import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    let a = word.toLowerCase();
    return a.charAt(0).toUpperCase() + a.slice(1);
  };

  return (
    <>
      {props.alert && (
        <div 
          className={`alert alert-${props.alert.type} alert-dismissible fade show shadow`} 
          role="alert"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            minWidth: "250px",
            zIndex: 1050
          }}
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </>
  );
}

export default Alert;
