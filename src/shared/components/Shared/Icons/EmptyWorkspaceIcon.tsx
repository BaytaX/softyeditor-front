const EmptyWorkspaceIcon = ({ selectedFileUrl }: any) => {
  return !selectedFileUrl ? (
    <div className="w-16 h-16 bg-[#E6E5E1] rounded-md flex items-center justify-center">
      <h1 className="text-2xl text-[#74736E]">A</h1>
    </div>
  ) : (
    <img src={selectedFileUrl} alt="empty-avatar" className=" w-16 h-16 cursor-pointer" />
  );
};

export default EmptyWorkspaceIcon;
