import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <p><strong>{label}:</strong> {value}</p>
);

const CourseLink = ({ title, link }: { title: string; link: string }) => (
  <li><a href={link} className="text-blue-600 hover:underline">{title}</a></li>
);

const SidebarTabs = () => (
  <Tabs orientation="vertical" className="h-full">
    <TabsList className="flex flex-col space-y-2 bg-gray-100 p-4 w-64">
      <TabsTrigger value="profile">Profil</TabsTrigger>
      <TabsTrigger value="courses">Mes cours</TabsTrigger>
      <TabsTrigger value="add-course">Ajouter un cours</TabsTrigger>
      <TabsTrigger value="payments">Paiements</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <ProfileCard />
    </TabsContent>
    <TabsContent value="courses">
      <EnrolledCourses />
    </TabsContent>
    <TabsContent value="add-course">
      <AddCourseForm />
    </TabsContent>
    <TabsContent value="payments">
      <PaymentHistory />
    </TabsContent>
    <TabsContent value="notifications">
      <Notifications />
    </TabsContent>
  </Tabs>
);

const ProfileCard = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-2">Profil utilisateur</h2>
      <InfoItem label="Nom" value="Jean Dupont" />
      <InfoItem label="Email" value="jean.dupont@example.com" />
      <InfoItem label="Téléphone" value="+33 6 12 34 56 78" />
      <InfoItem label="Rôle" value="Étudiant" />
    </CardContent>
  </Card>
);

const EnrolledCourses = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Cours inscrits</h2>
      <ul className="space-y-2">
        <CourseLink title="Développement Web" link="/cours/1" />
        <CourseLink title="Marketing Digital" link="/cours/2" />
      </ul>
    </CardContent>
  </Card>
);

const AddCourseForm = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Ajouter un cours</h2>
      <form className="space-y-4">
        <Input type="text" placeholder="Titre du cours" />
        <Input type="text" placeholder="Catégorie" />
        <Input type="text" placeholder="Langue" />
        <Input type="text" placeholder="Prix" />
        <Button type="submit">Ajouter</Button>
      </form>
    </CardContent>
  </Card>
);

const PaymentHistory = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Historique des paiements</h2>
      <ul className="space-y-2">
        <li>Développement Web - 49€ - Payé</li>
        <li>Marketing Digital - Gratuit</li>
      </ul>
    </CardContent>
  </Card>
);

const Notifications = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-2">
        <li>Nouveau message de votre instructeur</li>
        <li>Le cours "Data Science" commence demain</li>
      </ul>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 shadow-md">
        <SidebarTabs />
      </div>
      <div className="flex-1 p-8 space-y-8">
        <Tabs defaultValue="profile">
          <TabsContent value="profile">
            <ProfileCard />
          </TabsContent>
          <TabsContent value="courses">
            <EnrolledCourses />
          </TabsContent>
          <TabsContent value="add-course">
            <AddCourseForm />
          </TabsContent>
          <TabsContent value="payments">
            <PaymentHistory />
          </TabsContent>
          <TabsContent value="notifications">
            <Notifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
