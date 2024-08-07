import { api } from '@/lib/api';
import { BASE_URL } from 'shared/config';

export const updateDocumentContent = async function ({
  documentId,
  content,
}: {
  documentId: string | undefined;
  content: any;
}) {
  const replacer = (key: string, value: string) =>
    key === 'text' && value.includes('"') ? value.replaceAll('"', '“') : value;

  try {
    const body = JSON.stringify({ content: content }, replacer);

    const { data } = await api.patch(
      `${BASE_URL}/documents/${documentId}`,
      body,
    );

    return data;
  } catch (err) {
    throw err;
  }
};
