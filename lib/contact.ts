export type ContactMessage = {
  fullName: string;
  email: string;
  message: string;
};

export async function submitContactMessage(
  payload: ContactMessage,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const formData = new FormData();
  formData.append("fullName", payload.fullName);
  formData.append("email", payload.email);
  formData.append("message", payload.message);

  // Frontend-only for now. Later this can POST FormData to /api/contact.
  void formData;
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}
