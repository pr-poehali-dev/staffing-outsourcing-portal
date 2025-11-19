import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">HR Solutions</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('vacancies')} className="text-sm font-medium hover:text-primary transition-colors">Вакансии</button>
              <button onClick={() => scrollToSection('clients')} className="text-sm font-medium hover:text-primary transition-colors">Клиентам</button>
              <button onClick={() => scrollToSection('applicants')} className="text-sm font-medium hover:text-primary transition-colors">Соискателям</button>
              <Button onClick={() => scrollToSection('contacts')} size="sm">Контакты</Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                Профессиональный аутсорсинг персонала
              </h1>
              <p className="text-xl text-muted-foreground">
                Комплексные решения по подбору и управлению линейным персоналом для вашего бизнеса
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')}>
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="TrendingUp" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-3xl">500+</CardTitle>
                  <CardDescription>Клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Users" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-3xl">15000+</CardTitle>
                  <CardDescription>Трудоустроенных</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Award" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-3xl">12</CardTitle>
                  <CardDescription>Лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="MapPin" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-3xl">25</CardTitle>
                  <CardDescription>Городов России</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр HR-решений для эффективного управления персоналом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <Icon name="UserPlus" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Подбор персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Массовый подбор линейного персонала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Поиск квалифицированных специалистов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Проверка кандидатов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Гарантия замены сотрудника</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <Icon name="Briefcase" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Аутстаффинг</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оформление персонала в штат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Ведение кадрового делопроизводства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Расчет заработной платы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Налоговое администрирование</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">HR-консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оптимизация HR-процессов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Разработка системы мотивации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Обучение и развитие персонала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Аудит HR-функций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  HR Solutions — лидер рынка аутсорсинга линейного персонала с 12-летним опытом работы. Мы помогаем бизнесу экономить время и ресурсы, обеспечивая качественный подбор и управление персоналом.
                </p>
                <p>
                  Наша команда профессионалов работает в 25 городах России, обслуживая более 500 компаний различных отраслей: ритейл, логистика, производство, HoReCa и другие.
                </p>
                <p>
                  Мы гарантируем индивидуальный подход, прозрачность процессов и соблюдение всех законодательных норм.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="bg-primary text-white">
                  <CardHeader>
                    <Icon name="Target" size={40} className="mb-2" />
                    <CardTitle>Миссия</CardTitle>
                    <CardDescription className="text-blue-100">
                      Создавать эффективные HR-решения для роста бизнеса клиентов
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Shield" size={40} className="text-primary mb-2" />
                    <CardTitle>Надежность</CardTitle>
                    <CardDescription>
                      Полное юридическое сопровождение и страхование рисков
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="space-y-6 pt-12">
                <Card>
                  <CardHeader>
                    <Icon name="Zap" size={40} className="text-primary mb-2" />
                    <CardTitle>Скорость</CardTitle>
                    <CardDescription>
                      Закрытие вакансий от 24 часов
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-secondary text-white">
                  <CardHeader>
                    <Icon name="Heart" size={40} className="mb-2" />
                    <CardTitle>Ценности</CardTitle>
                    <CardDescription className="text-gray-300">
                      Профессионализм, честность и партнерство
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Актуальные вакансии</h2>
            <p className="text-xl text-muted-foreground">Найдите работу мечты вместе с нами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Продавец-консультант', company: 'Ритейл сеть', salary: 'от 50 000 ₽', location: 'Москва' },
              { title: 'Кассир', company: 'Супермаркет', salary: 'от 45 000 ₽', location: 'Санкт-Петербург' },
              { title: 'Грузчик-комплектовщик', company: 'Склад', salary: 'от 55 000 ₽', location: 'Московская обл.' },
              { title: 'Официант', company: 'Ресторан', salary: 'от 60 000 ₽', location: 'Москва' },
              { title: 'Оператор call-центра', company: 'Колл-центр', salary: 'от 48 000 ₽', location: 'Удаленно' },
              { title: 'Курьер', company: 'Доставка', salary: 'от 70 000 ₽', location: 'Москва' },
            ].map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                  <CardDescription>{vacancy.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Wallet" size={16} className="text-primary" />
                    <span className="font-semibold">{vacancy.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{vacancy.location}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">Откликнуться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Клиентам</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Экономьте время и ресурсы на подборе персонала — доверьте это профессионалам
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Быстрый подбор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Закрываем вакансии за 24-48 часов благодаря большой базе проверенных кандидатов и эффективной системе рекрутинга.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>База 50 000+ кандидатов</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Гарантия замены в течение 14 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="DollarSign" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Экономия до 40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Снижаем затраты на содержание HR-отдела, рекрутинг и оформление персонала. Прозрачная система ценообразования.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Без скрытых платежей</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Гибкие тарифы под ваш бизнес</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="FileText" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Юридическая чистота</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Берем на себя все риски и обязательства работодателя. Полное соответствие трудовому законодательству РФ.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Оформление по ТК РФ</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Страхование ответственности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="BarChart" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Регулярный мониторинг работы персонала, аналитика и отчетность. Личный менеджер для оперативного решения вопросов.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Ежемесячная аналитика</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>24/7 поддержка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="applicants" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Соискателям</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Найдите стабильную работу с официальным оформлением и достойной зарплатой
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="benefits">Преимущества</TabsTrigger>
                <TabsTrigger value="process">Как устроиться</TabsTrigger>
                <TabsTrigger value="support">Поддержка</TabsTrigger>
              </TabsList>
              
              <TabsContent value="benefits" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="FileCheck" size={32} className="text-primary" />
                        <div>
                          <CardTitle>Официальное трудоустройство</CardTitle>
                          <CardDescription className="mt-1">По ТК РФ со всеми социальными гарантиями</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Wallet" size={32} className="text-primary" />
                        <div>
                          <CardTitle>Стабильная зарплата</CardTitle>
                          <CardDescription className="mt-1">Своевременные выплаты 2 раза в месяц</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" size={32} className="text-primary" />
                        <div>
                          <CardTitle>Гибкий график</CardTitle>
                          <CardDescription className="mt-1">Возможность выбора удобного графика работы</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="TrendingUp" size={32} className="text-primary" />
                        <div>
                          <CardTitle>Карьерный рост</CardTitle>
                          <CardDescription className="mt-1">Программы обучения и развития сотрудников</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="space-y-6">
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Отклик на вакансию', desc: 'Выберите подходящую вакансию и оставьте заявку онлайн или по телефону' },
                    { step: '2', title: 'Собеседование', desc: 'Наш рекрутер свяжется с вами в течение 24 часов для проведения собеседования' },
                    { step: '3', title: 'Оформление документов', desc: 'Помогаем с подготовкой всех необходимых документов для трудоустройства' },
                    { step: '4', title: 'Выход на работу', desc: 'Сопровождаем в первый рабочий день и оказываем поддержку в адаптации' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="support" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Icon name="Headphones" size={24} className="text-primary" />
                          Служба поддержки
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Наши специалисты помогут решить любые вопросы по трудоустройству, выплатам и условиям работы.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={16} className="text-primary" />
                            <span>Горячая линия: 8-800-XXX-XX-XX</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Mail" size={16} className="text-primary" />
                            <span>Email: support@hr-solutions.ru</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Icon name="BookOpen" size={24} className="text-primary" />
                          Обучение и развитие
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Бесплатные курсы и тренинги для повышения квалификации и профессионального роста.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span>Онлайн-курсы</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span>Корпоративные тренинги</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="type">Я</Label>
                  <select id="type" className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                    <option>Работодатель</option>
                    <option>Соискатель</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о вашем запросе..." className="mt-1" rows={4} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">8-800-XXX-XX-XX (бесплатно по РФ)</p>
                      <p className="text-muted-foreground">+7 (495) XXX-XX-XX (Москва)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@hr-solutions.ru</p>
                      <p className="text-muted-foreground">sales@hr-solutions.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Офис в Москве</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      <p className="text-muted-foreground">БЦ "Примерный", офис 100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} />
                    Мессенджеры
                  </h4>
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm">WhatsApp</Button>
                    <Button variant="secondary" size="sm">Telegram</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Users" size={28} />
                <span className="text-xl font-bold">HR Solutions</span>
              </div>
              <p className="text-sm text-gray-300">
                Профессиональный аутсорсинг персонала по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Подбор персонала</li>
                <li>Аутстаффинг</li>
                <li>HR-консалтинг</li>
                <li>Кадровое делопроизводство</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Контакты</li>
                <li>Партнерам</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Политика конфиденциальности</li>
                <li>Пользовательское соглашение</li>
                <li>Реквизиты</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 HR Solutions. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
