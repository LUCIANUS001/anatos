import MedicalCard from "./MedicalCard";

interface MedicalCardGridProps {
  items: any[];
  icon?: string;
}

export default function MedicalCardGrid({ items, icon }: MedicalCardGridProps) {
  if (!items?.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => {
        let title = "";
        let description = "";

        // Clinical Correlation
        if ("title" in item && "description" in item) {
          title = item.title;
          description = item.description ?? "";
        }

        // Blood Supply
        else if ("artery" in item) {
          title = item.artery;
          description = item.supply ?? "";
        }

        // Nerve Supply
        else if ("nerve" in item) {
          title = item.nerve;
          description = item.significance ?? "";
        }

        // Muscle Attachments
        else if ("muscle" in item) {
          title = item.muscle;
          description = item.attachment ?? "";
        }

        // Practical Anatomy
        else if ("steps" in item) {
          title = item.title;
          description = item.steps.join("\n• ");
        }

        // Fallback
        else {
          title = item.title ?? "Untitled";
          description = item.description ?? "";
        }

        return (
          <MedicalCard
            key={index}
            title={title}
            description={description}
            icon={icon}
          />
        );
      })}
    </div>
  );
}
