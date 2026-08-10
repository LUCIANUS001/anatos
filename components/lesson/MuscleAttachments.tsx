interface MuscleAttachment {
  muscle: string;
  attachment: string;
}

interface MuscleAttachmentsProps {
  attachments: MuscleAttachment[];
}

export default function MuscleAttachments({
  attachments,
}: MuscleAttachmentsProps) {
  return (
    <section
      id="muscle-attachments"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Muscle Attachments
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          The humerus provides attachment for numerous muscles that act on the
          shoulder and elbow joints. Understanding these attachment sites is
          essential for explaining movement, muscle function, fracture
          displacement, and clinical examination of the upper limb.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full">
          <thead className="bg-sky-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Muscle</th>
              <th className="px-6 py-4 text-left">Attachment</th>
            </tr>
          </thead>

          <tbody>
            {attachments.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold text-slate-900">
                  {item.muscle}
                </td>

                <td className="px-6 py-4 leading-7 text-slate-700">
                  {item.attachment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}