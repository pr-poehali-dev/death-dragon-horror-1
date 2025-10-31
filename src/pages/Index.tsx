import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/3274f653-9354-469c-ae8d-2b3f489b4930.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-cormorant text-7xl md:text-9xl font-bold mb-6 text-primary candle-flicker">
            ДРАКОН СМЕРТИ
          </h1>
          <p className="font-alegreya text-xl md:text-2xl text-accent mb-8 italic">
            "Когда луна окрасится кровью..."
          </p>
          <div className="inline-block animate-float">
            <Icon name="ChevronDown" size={48} className="text-accent" />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-primary">
                Пророчество Гадалки
              </h2>
              <Card className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg">
                <p className="text-2xl text-accent font-bold">
                  "В год кровавой луны,
                </p>
                <p>
                  когда звёзды сойдут с небес, а тени станут длиннее света,
                  явится Он — Дракон Смерти."
                </p>
                <Separator className="bg-primary/30" />
                <p>
                  Старая гадалка предсказала это 50 лет назад. Её слова записали
                  в древнем свитке и спрятали в храме.
                </p>
                <p className="text-destructive font-semibold">
                  В этом году все знаки сбываются. Луна окрасилась кровью.
                  Звёзды падают каждую ночь.
                </p>
              </Card>

            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/e1280c5c-b097-4fa8-be2d-dd08da54e71f.jpg"
                alt="Гадалка"
                className="rounded-lg vintage-border w-full candle-flicker"
              />
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-accent/30" />

        <section>
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-accent">
            Артефакты Тьмы
          </h2>
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/5dff1c5b-7b01-443b-8c14-96fee8a9523d.jpg"
              alt="Артефакты"
              className="w-full h-80 object-cover candle-flicker vintage-border"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {artifacts.map((artifact) => (
              <Card
                key={artifact.id}
                className="p-6 bg-card/60 backdrop-blur border-primary/20 hover:border-accent/50 transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon
                      name={artifact.icon as any}
                      size={40}
                      className="text-primary group-hover:text-accent transition-colors animate-pulse-glow"
                    />
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {artifact.name}
                  </h3>
                  <p className="text-muted-foreground font-alegreya">
                    {artifact.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-24 text-center">
          <Card className="p-12 bg-card/40 backdrop-blur border-destructive/50 inline-block">
            <Icon name="Flame" size={56} className="text-destructive candle-flicker mx-auto mb-4" />
            <p className="font-cormorant text-3xl text-destructive font-bold mb-4">
              Время истекает...
            </p>
            <p className="font-alegreya text-xl text-foreground/80">
              Последняя надежда деревни — найти древнее оружие
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;