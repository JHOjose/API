import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem,
  IonInput, IonSelect, IonSelectOption, IonToggle, IonCheckbox,
  IonButton, IonButtons, IonIcon, IonBadge, IonModal, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  phonePortraitOutline,
  createOutline,
  documentTextOutline,
  paperPlaneOutline,
  closeCircleOutline,
  peopleOutline,       
  personCircleOutline  
} from 'ionicons/icons';

import { BookingRequest, AVAILABLE_SERVICES, ServiceCategory } from '../models/booking-request.model';
import { FeedbackService } from '../services/feedback.service';
import { ApiService } from '../services/api.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonCheckbox,
    IonButton,
    IonButtons,
    IonIcon,
    IonBadge,
    IonModal,
    IonLabel
  ]
})
export class HomePage implements OnInit {
  private readonly feedbackService = inject(FeedbackService);
  private readonly apiService = inject(ApiService); 

  readonly services: ServiceCategory[] = AVAILABLE_SERVICES;

  usuariosApi: any[] = []; 

  formData: BookingRequest = {
    fullName: '',
    serviceType: '',
    smsNotifications: true,
    acceptTerms: false
  };

  isTermsModalOpen: boolean = false;

  constructor() {
    addIcons({
      phonePortraitOutline,
      createOutline,
      documentTextOutline,
      paperPlaneOutline,
      closeCircleOutline,
      peopleOutline,
      personCircleOutline
    });
  }

  ngOnInit() {
    this.apiService.getItems().subscribe({
      next: (data) => {
        this.usuariosApi = data;
        console.log('Datos cargados de la API:', this.usuariosApi);
      },
      error: (err) => console.error('Error al cargar la API:', err)
    });
  }


  setTermsModalOpen(isOpen: boolean): void {
    this.isTermsModalOpen = isOpen;
  }

  async enviarSolicitud(): Promise<void> {
    const trimmedName = this.formData.fullName ? this.formData.fullName.trim() : '';

    if (!trimmedName || !this.formData.serviceType || !this.formData.acceptTerms) {
      await this.feedbackService.showToast(
        'Por favor complete los campos obligatorios (*)',
        'danger',
        3000
      );
      return;
    }

    const selectedService = this.services.find(s => s.id === this.formData.serviceType);
    const serviceName = selectedService ? selectedService.name : this.formData.serviceType;
    const smsStatusText = this.formData.smsNotifications ? 'Habilitadas (Sí)' : 'Deshabilitadas (No)';

    const summaryMessage = `
      <strong>Estudiante:</strong> ${trimmedName}<br>
      <strong>Servicio:</strong> ${serviceName}<br>
      <strong>Notificaciones SMS:</strong> ${smsStatusText}<br>
      <strong>Términos:</strong> Aceptados correctamente.<br><br>
      <em>¡Tu registro ha quedado almacenado en memoria con éxito!</em>
    `;

    await this.feedbackService.showAlert(
      '¡Solicitud Registrada con Éxito!',
      'Universidad Surcolombiana',
      summaryMessage,
      'Aceptar y Finalizar'
    );
  }
}