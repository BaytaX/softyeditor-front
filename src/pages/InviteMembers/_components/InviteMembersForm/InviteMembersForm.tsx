import Button from 'shared/components/Shared/Button';
import { TextareaForm } from 'shared/components/ui/TextareaForm';
import InviteMembersInputs from '../InviteMembersInputs';
import { useEffect } from 'react';

interface InviteMembersFormProps {
  handleSubmit: any;
  onSubmit: any;
  more: boolean;
  register: any;
  handleSetMore: () => void;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
  setInvite: React.Dispatch<React.SetStateAction<boolean>>;
  copyInviteLink: () => void;
  invite: boolean;
  isLoading: boolean;
  getUsersByEmailsLoading: boolean;
  addMembersLoading: boolean;
  isValid: boolean;
  errors: any;
}

export default function InviteMembersForm({
  handleSubmit,
  onSubmit,
  more,
  register,
  handleSetMore,
  setTextAreaValue,
  copyInviteLink,
  isLoading,
  getUsersByEmailsLoading,
  addMembersLoading,
  isValid,
  errors
}: InviteMembersFormProps) {

  return (
    <form
      className="flex flex-col items-center cursor-pointer gap-3 relative "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-2"></div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          {!more ? (
            <InviteMembersInputs
              register={register}
              handleSetMore={handleSetMore}
              errors={errors}
            />
          ) : (
            <TextareaForm setValue={setTextAreaValue} />
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <Button
            text={''}
            onClick={copyInviteLink}
            type="button"
            className="w-full flex items-center justify-center gap-1 h-8 rounded-[5px] text-[#2383E2] text-sm font-medium bg-[#E9F0F7] hover:opacity-75 shadow-inner md:shadow-md mt-2 disabled:opacity-40   "
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-[#2383E2] "
            >
              <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
            </svg>
            Copy invite link
          </Button>
          <Button
            text={`Take me to E-ditor`}
            isLoading={
              isLoading || getUsersByEmailsLoading || addMembersLoading
            }
            disabled={!isValid}
            type="submit"
            className="w-full flex items-center justify-center h-8 rounded-[5px] text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 shadow-inner md:shadow-md mt-2 disabled:opacity-40  "
          />
        </div>
      </div>
    </form>
  );
}
