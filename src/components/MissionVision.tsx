import { useTranslation } from "react-i18next";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('mission_vision_section.mission.title')}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission_vision_section.mission.description')}
            </p>
          </div>

          {/* Vision */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('mission_vision_section.vision.title')}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission_vision_section.vision.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;