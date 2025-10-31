import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const [hoveredArtifact, setHoveredArtifact] = useState<number | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  };

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
      <audio ref={hoverSoundRef} src="https://cdn.freesound.org/previews/140/140776_2615119-lq.mp3" preload="auto" />
      <audio ref={clickSoundRef} src="https://cdn.freesound.org/previews/264/264981_4486188-lq.mp3" preload="auto" />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/3274f653-9354-469c-ae8d-2b3f489b4930.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
        <div className="fog-effect"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-cormorant text-7xl md:text-9xl font-bold mb-6 text-primary candle-flicker">
            ДРАКОН СМЕРТИ
          </h1>
          <p className="font-alegreya text-xl md:text-2xl text-accent mb-8 italic">
            "Когда луна окрасится кровью..."
          </p>
          <a href="#story-begin" className="inline-block animate-float hover:scale-110 transition-transform">
            <Icon name="ChevronDown" size={48} className="text-accent" />
          </a>
        </div>
      </div>


      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <section id="story-begin" className="mb-32 scroll-mt-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-accent">
            Как Всё Началось
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <img
                src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/97a5b6ed-8c5b-4603-97f9-8d26ecf616d7.jpg"
                alt="Мирная деревня"
                className="rounded-lg vintage-border w-full"
              />
            </div>
            <div className="order-2 space-y-6">
              <Card className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg">
                <p className="text-2xl text-primary font-bold font-cormorant">
                  Когда-то это была мирная деревня...
                </p>
                <p>
                  Люди жили спокойно, обрабатывали поля, растили детей. 
                  Никто не верил в древние легенды о драконах.
                </p>
                <Separator className="bg-accent/30" />
                <p>
                  Старики рассказывали сказки у костра, но молодёжь только смеялась. 
                  "Драконы? Это байки для детей!"
                </p>
                <p className="text-muted-foreground italic">
                  Но в деревне жила одна старая гадалка, которая видела будущее...
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-destructive/30" />

        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-primary">
                Пророчество Гадалки
              </h2>
              <Card 
                className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={playClickSound}
              >
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

        <section className="mb-32">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-destructive">
            Появление Героя
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <Card className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg">
                <p className="text-2xl text-primary font-bold font-cormorant">
                  Когда всё казалось потеряно...
                </p>
                <p>
                  Из дальних земель пришёл одинокий воин. Лицо его скрывал капюшон, 
                  а за спиной висел древний меч, покрытый рунами.
                </p>
                <Separator className="bg-accent/30" />
                <p className="text-accent font-semibold">
                  "Я слышал о драконе, что терроризирует ваши земли," — 
                  сказал он старейшинам деревни.
                </p>
                <p>
                  Никто не знал его имени. Никто не знал, откуда он пришёл. 
                  Но в его глазах горел огонь решимости.
                </p>
                <p className="text-destructive italic font-bold">
                  Он был готов сразиться с самой смертью.
                </p>
              </Card>
            </div>
            <div className="order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                <img
                  src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/93dd4aef-6f89-41ac-8aba-d1b28fc493b2.jpg"
                  alt="Храбрый воин"
                  className="rounded-lg vintage-border w-full relative z-10 hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-destructive/50" />

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
                onMouseEnter={() => {
                  setHoveredArtifact(artifact.id);
                  playHoverSound();
                }}
                onMouseLeave={() => setHoveredArtifact(null)}
                onClick={playClickSound}
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

        <Separator className="my-16 bg-destructive/50" />

        <section className="mb-32">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-destructive">
            Путь к Логову Дракона
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg">
                <p className="text-2xl text-accent font-bold font-cormorant">
                  На рассвете воин отправился в путь...
                </p>
                <p>
                  Горная тропа вела к вершине, где среди скал зияла чёрная пещера. 
                  Местные называли её "Пастью Смерти".
                </p>
                <Separator className="bg-destructive/30" />
                <p>
                  Путь был долгим и опасным. Обвалы, ледяные ветра, кости павших смельчаков — 
                  всё это пытался остановить героя.
                </p>
                <p className="text-destructive font-semibold">
                  Но ничто не могло остановить его решимость.
                </p>
                <p className="italic">
                  У входа в пещеру воздух накалился. Дракон чувствовал приближение врага...
                </p>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/39ce3759-0e0c-4131-985f-a717faf8a830.jpg"
                alt="Путь к пещере дракона"
                className="rounded-lg vintage-border w-full hover:scale-[1.02] transition-transform"
              />
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-destructive/70" />

        <section className="mb-32">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-destructive animate-pulse-glow">
            Финальная Битва
          </h2>
          <div className="mb-12 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-destructive/50 to-transparent z-10" />
            <img
              src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/57c3c3fe-c76b-4bbb-ad57-7704b3967220.jpg"
              alt="Битва с драконом"
              className="w-full h-96 object-cover candle-flicker"
            />
          </div>
          <Card className="vintage-border bg-card/60 backdrop-blur p-8 space-y-6 text-card-foreground font-alegreya text-lg">
            <p className="text-3xl text-destructive font-bold font-cormorant text-center">
              Схватка длилась целую ночь
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="flex items-start gap-3">
                  <Icon name="Flame" className="text-destructive mt-1 flex-shrink-0" size={24} />
                  <span>Огненное дыхание дракона плавило камни вокруг</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="Swords" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span>Меч воина рассекал воздух, оставляя светящиеся следы рун</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="Shield" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span>Каждый удар отзывался громом в глубинах пещеры</span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-accent font-semibold">
                  Дракон был могуч, но воин был быстрее. Чешуя трескалась под ударами древнего клинка.
                </p>
                <p className="text-destructive italic">
                  На рассвете раздался последний рёв чудовища. Дракон пал.
                </p>
                <p className="text-primary font-bold text-xl">
                  Проклятие было снято!
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-16 bg-accent/50" />

        <section className="mb-32">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-12 text-center text-accent">
            Триумф Героя
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <img
                src="https://cdn.poehali.dev/projects/80749753-2b4e-424d-af2a-a3e1210dbaa2/files/e0031316-ae8f-4379-9d7d-c32d1da94089.jpg"
                alt="Празднование победы"
                className="rounded-lg vintage-border w-full"
              />
            </div>
            <div className="order-2">
              <Card className="vintage-border bg-card/60 backdrop-blur p-6 space-y-4 text-card-foreground font-alegreya text-lg">
                <p className="text-2xl text-accent font-bold font-cormorant">
                  Возвращение героя
                </p>
                <p>
                  Когда воин спустился с горы, весь народ вышел его встречать. 
                  Голова дракона была доказательством победы.
                </p>
                <Separator className="bg-accent/30" />
                <div className="space-y-3 text-primary">
                  <p className="flex items-center gap-2">
                    <Icon name="PartyPopper" className="text-accent" size={20} />
                    Три дня и три ночи длился праздник
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Trophy" className="text-accent" size={20} />
                    Герою предложили стать правителем
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Crown" className="text-accent" size={20} />
                    Воздвигли памятник у главных ворот
                  </p>
                </div>
                <Separator className="bg-accent/30" />
                <p className="text-muted-foreground italic">
                  Но наутро четвёртого дня героя не было. Он ушёл так же тихо, как и пришёл. 
                  Ведь в мире ещё оставалось зло, которое нужно было победить...
                </p>
                <p className="text-accent font-bold text-center text-2xl font-cormorant">
                  Легенда о нём живёт до сих пор
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;