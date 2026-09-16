import type { JobApplication } from "@/types";

export async function submitJobApplication(
  application: JobApplication,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const formData = new FormData();
  formData.append("fullName", application.fullName);
  formData.append("email", application.email);
  formData.append("phone", application.phone);
  formData.append("positionId", application.positionId);
  formData.append("portfolioUrl", application.portfolioUrl);
  formData.append("message", application.message);
  if (application.resume) {
    formData.append("resume", application.resume);
  }

  // Frontend-only for now. Later this can POST FormData to:
  // /api/careers/${application.positionId}/apply
  void formData;
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}
