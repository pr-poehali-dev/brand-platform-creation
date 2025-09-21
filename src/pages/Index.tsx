import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Consultation request:', formData);
    setConsultationOpen(false);
    // Сброс формы
    setFormData({ name: '', company: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">БК</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold">БАЗОВЫЙ КОМПОНЕНТ</h1>
                <p className="text-sm text-muted-foreground">с 2021 года</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Решения 18/75</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
              <a href="#catalogs" className="text-foreground hover:text-primary transition-colors">Каталоги</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>

            <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-accent text-primary-foreground font-medium">
                  <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                  Консультация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading">Техническая консультация</DialogTitle>
                  <DialogDescription>
                    Получите персональную консультацию наших технических специалистов
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="company"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Опишите вашу техническую задачу"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-accent">
                    Отправить запрос
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Стратегический партнер промышленных предприятий
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                  <span className="text-primary">БАЗОВЫЙ</span><br/>
                  <span className="text-foreground">КОМПОНЕНТ</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Помогаем работать спокойно и без рисков. Решаем задачи по постановлению № 18/75, 
                  поставляем оборудование и обеспечиваем полный производственный цикл.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-medium">
                  <Icon name="FileText" className="w-5 h-5 mr-2" />
                  Получить предложение
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Связаться с нами
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Экономия на восстановлении</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src="/img/f6aba110-39fd-4a77-91b9-e1f99202084e.jpg" 
                alt="Промышленное оборудование Базовый Компонент"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Проблемы промышленного рынка
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Особенно актуальны вызовы постановления № 18/75 Минпромторга
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "AlertTriangle",
                title: "Недостаток гибкости",
                description: "Крупные игроки предлагают стандартные решения без учёта развития производства"
              },
              {
                icon: "Users",
                title: "Кадровый дефицит",
                description: "Катастрофическая нехватка инженеров и специалистов в отрасли"
              },
              {
                icon: "Truck",
                title: "Логистические сложности",
                description: "Поставки срываются, сроки горят, дефицит решений на рынке"
              },
              {
                icon: "FileX",
                title: "Отсутствие кейсов",
                description: "Недостаток наглядных примеров тормозит доверие новых заказчиков"
              },
              {
                icon: "Settings",
                title: "Координация поставщиков",
                description: "Приходится тратить ресурсы на координацию и контроль разных поставщиков"
              },
              {
                icon: "Shield",
                title: "Постановление № 18/75",
                description: "Обязательные доли отечественного инструмента, риски штрафов и остановки производства"
              }
            ].map((problem, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={problem.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary text-primary mb-4">
              Наше решение
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Специнструмент и нестандартные решения —<br/>
              <span className="text-primary">то, с чего другие не начинают</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "CheckCircle",
                  title: "Работаем по 18/75",
                  description: "Официальный дилер «Миноликса» в реестре Минпромторга"
                },
                {
                  icon: "Cog",
                  title: "Полный цикл инжиниринга",
                  description: "Технология, управляющие программы, изготовление под ваше предприятие"
                },
                {
                  icon: "Recycle",
                  title: "Сервис-восстановление",
                  description: "Сокращаем затраты до 70% от стоимости нового инструмента"
                },
                {
                  icon: "Package",
                  title: "Складские запасы",
                  description: "Всегда поддерживаем запасы для обеспечения партнеров вовремя"
                },
                {
                  icon: "Handshake",
                  title: "Принцип одного окна",
                  description: "Все поставки и сервис через одного надежного партнёра"
                },
                {
                  icon: "Shield",
                  title: "Защита проектов",
                  description: "Минимизируем риски срыва и брака для клиентов"
                }
              ].map((solution, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={solution.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Факты о компании</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">Официальный дилер «Миноликса» (реестр Минпромторга)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">С нашими технологами подбираем станки, технологию и инструменты</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="RefreshCw" className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">Восстанавливаем твердосплавный осевой инструмент с экономией 70%</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Wrench" className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">Выполняем сложные проекты по проектированию специнструмента</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Готовы стать нашим партнером?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите персональное предложение и техническую консультацию от наших специалистов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading">Техническая консультация</DialogTitle>
                  <DialogDescription>
                    Наши специалисты свяжутся с вами в течение часа
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" required />
                  <Input placeholder="Компания" required />
                  <Input placeholder="Телефон" required />
                  <Textarea placeholder="Опишите вашу задачу" rows={3} />
                  <Button type="submit" className="w-full bg-primary hover:bg-accent">
                    Отправить запрос
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">БК</span>
                </div>
                <span className="font-heading font-bold">БАЗОВЫЙ КОМПОНЕНТ</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Стратегический партнер промышленных предприятий России с 2021 года
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Решения по 18/75</li>
                <li>Импортозамещение</li>
                <li>Специнструмент</li>
                <li>Восстановление инструмента</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Каталоги</li>
                <li>Партнерам</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (xxx) xxx-xx-xx</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@bazcomp.ru</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Базовый Компонент. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;