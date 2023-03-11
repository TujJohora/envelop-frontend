const ErrorMessage = ({ error }) => {
  return (
    <p className="bg-rose-50 text-rose-500 p-5 rounded border border-rose-500">
      {error}
    </p>
  );
};

export default ErrorMessage;