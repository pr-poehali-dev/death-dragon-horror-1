import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const artifacts = [
    {
      id: 1,
      name: "Кровавый Амулет",
      description: "Древний талисман, найденный у входа в пещеру дракона",
      icon: "Flame",
    },
    {
      id: 2,
      name: "Чёрная Чешуя",
      description: "Фрагмент дракона, обугленный адским пламенем",
      icon: "Shield",
    },
    {
      id: 3,
      name: "Книга Пророчеств",
      description: "Древняя рукопись с предсказаниями гадалки",
      icon: "BookOpen",
    },
  ];

  return (
    <div className="min-h-screen bg-background film-grain">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl text-center space-y-8 fade-in-up">
            <div className="inline-block p-4 candle-flicker">
              <Icon name="Flame" size={64} className="text-primary animate-pulse-glow" />
            </div>
            
            <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-foreground tracking-wider">
              ДРАКОН СМЕРТИ
            </h1>
            
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <p className="font-alegreya text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
              "Когда луна окрасится кровью, и тени поглотят свет, 
              придёт он из глубин забвения..."
            </p>
            
            <div className="pt-8">
              <Icon name="ChevronDown" size={32} className="text-primary animate-float mx-auto" />
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-foreground">
                Пророчество Гадалки
              </h2>
              <div className="w-24 h-1 mx-auto bg-primary" />
            </div>
            
            <Card className="vintage-border bg-card/80 backdrop-blur-sm p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Scroll" size={32} className="text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4 text-card-foreground font-alegreya text-lg leading-relaxed">
                  <p>
                    Старая гадалка, жившая на окраине деревни, давно предупреждала о грядущей беде. 
                    Её глаза, помутневшие от времени, видели то, что скрыто от других.
                  </p>
                  <p className="italic text-primary font-semibold">
                    "В год, когда урожай будет богат, а сердца людей беспечны, 
                    спустится с гор древнее зло. Дракон Смерти пробудится от векового сна, 
                    и пламя его гнева поглотит всё на своём пути."
                  </p>
                  <p>
                    Никто не верил её словам. Деревня процветала, жители смеялись над 
                    суевериями старухи. Но когда небо потемнело, а в воздухе запахло серой, 
                    все вспомнили о пророчестве...
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="vintage-border bg-card/80 backdrop-blur-sm p-8 space-y-4">
                <Icon name="Eye" size={40} className="text-accent" />
                <h3 className="font-cormorant text-3xl font-bold text-card-foreground">
                  Первые Знаки
                </h3>
                <p className="text-muted-foreground font-alegreya leading-relaxed">
                  Птицы перестали петь. Скот беспокойно метался в загонах. 
                  По ночам слышался далёкий рёв, от которого стыла кровь в жилах.
                </p>
              </Card>

              <Card className="vintage-border bg-card/80 backdrop-blur-sm p-8 space-y-4">
                <Icon name="Skull" size={40} className="text-destructive" />
                <h3 className="font-cormorant text-3xl font-bold text-card-foreground">
                  Ночь Пробуждения
                </h3>
                <p className="text-muted-foreground font-alegreya leading-relaxed">
                  Полная луна скрылась за тучами. Земля содрогнулась. 
                  Из древней пещеры вырвался столб чёрного дыма и адского пламени.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-foreground">
                Проклятые Артефакты
              </h2>
              <div className="w-24 h-1 mx-auto bg-primary" />
              <p className="font-alegreya text-xl text-muted-foreground max-w-2xl mx-auto">
                Свидетельства ужаса, собранные теми, кто осмелился приблизиться к логову зверя
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {artifacts.map((artifact, index) => (
                <Card 
                  key={artifact.id}
                  className="vintage-border bg-card/80 backdrop-blur-sm p-8 space-y-6 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/20 rounded-full candle-flicker">
                      <Icon name={artifact.icon as any} size={48} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="font-cormorant text-2xl font-bold text-card-foreground">
                      {artifact.name}
                    </h3>
                    <p className="text-muted-foreground font-alegreya leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block p-4 candle-flicker">
              <Icon name="AlertTriangle" size={48} className="text-destructive" />
            </div>
            
            <p className="font-cormorant text-3xl md:text-4xl font-bold text-foreground italic">
              "Пророчество сбылось. Дракон пришёл. <br />Выживет ли кто-нибудь, чтобы рассказать эту историю?"
            </p>
            
            <div className="pt-8 opacity-50">
              <p className="font-alegreya text-sm text-muted-foreground">
                Конец... или только начало?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
