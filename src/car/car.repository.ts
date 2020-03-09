import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base.repository';
import { Car } from './car.type';

@Injectable()
export class CarRepository extends BaseRepository {
  private contacts = `
      contacts {
        count
        list {
          id
          carId
          company
          salutation
          firstName
          lastName
          email
          phone
          street
          zip
          city
          comment
          type
          subtype
          createdAt
          updatedAt
          deletedAt
          createdByName
          createdById
          updatedByName
          updatedById
          deletedByName
          deletedById
          taxId
          bankName
          bankCode
          bankAccountOwner
          bankAccountNumber
          accountType
          bankAccountOwnerTaxId
          bankContactDetails
          maritalStatus
          occupation
          reasonForSelling
          referrerCode
        }
      }
  `;

  private status = `
      status {
        id
        carId
        statusType
        status
        reason
        country
        createdAt
        updatedAt
        deletedAt
        createdByName
        createdById
        updatedByName
        updatedById
        deletedByName
        deletedById
      }
  `;

  private location = `
    location {
      id
      carId
      locationType
      location
      placeId
      country
      createdAt
      updatedAt
      deletedAt
      createdByName
      createdById
      updatedByName
      updatedById
      deletedByName
      deletedById
    }
  `;

  private financialDetails = `
      purchaseCancellingReason
      selectedMarketplaces
      createdByName
      createdById
      updatedByName
      updatedById
      deletedByName
      deletedById
      paymentRecipient
      paymentType
      riskIndex
      processingAmount
      processingReference
      dueAmount
      outstandingAmount
      dealerExecutive
      competitorPrice
      initialValuationPrice
      sellerExpectationPrice
      sellerFirstOffer
      sellerFinalOffer
      reserveAuctionPrice
      purchaseCarPrice
      purchaseOtherPrice
      sellCarPrice
      sellOtherPrice
      purchasePayment
      buyerPayment
      purchaseChannel
      purchasedBy
      purchasedComment
      saleChannel
      saleComment
      salesRep
      soldTo
      reservedAt
      boughtAt
      soldAt
      country
      invoiceDate
      invoiceNumber
      b2bDeal
      createdAt
      updatedAt
      deletedAt
      purchasePriceTotal
      sellPriceTotal
      marginTotal
      marginPercentage
      purchasePaymentDone
      buyerDone
      purchasePricing {
        id
        carId
        type
        amount
        subtype
        comments
        country
        vatPercentage
        vat
        referenceId
        entity
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
      }
      sellPricing {
        id
        carId
        type
        amount
        subtype
        comments
        country
        vatPercentage
        vat
        referenceId
        entity
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
      }
      offerPurchasePricing {
        id
        carId
        type
        amount
        subtype
        country
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
      }
      offerSellPricing {
        id
        carId
        type
        amount
        subtype
        country
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
      }
      paymentsMade {
        id
        carId
        type
        amount
        subtype
        comments
        country
        transactionDate
        vatPercentage
        vat
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
        status
      }
      paymentsReceived {
        id
        carId
        type
        amount
        subtype
        comments
        country
        transactionDate
        vatPercentage
        vat
        createdAt
        updatedAt
        deletedAt
        createdById
        createdByEmail
        createdByName
        updatedById
        updatedByEmail
        updatedByName
        deletedById
        deletedByName
        status
      }
  `;

  private paperwork = `
    paperwork {
      id
      carId
      country
      documentStatus
      documentHandoverToBuyer
      documentHandoverfromSellerDate
      documentHandoverToBuyerDate
      documentLocation
      comment
      createdAt
      updatedAt
      deletedAt
      createdByName
      createdById
      updatedByName
      updatedById
      deletedByName
      deletedById
    }
  `;

  private document = `
    documents {
      id
      entity
      fileName
      fileType
      fileSize
      category
      visibility
      status
      createdAt
      updatedAt
      deletedAt
      createdById
      createdByName
      updatedById
      updatedByName
      deletedById
      deletedByName
    }
    completedDocumentCategoriesPercentage
    completedDocumentCategoriesReviewedPercentage
    completedDocumentCategories
    completedDocumentCategoriesReviewed
    incompleteDocumentCategories
    incompleteDocumentCategoriesReviewed
  `;

  private inspection = `
    inspection {
      id
      createdAt
      inspector
      location
    }
  `;

  private warning = `
    warnings {
      count
      list {
        scalar
      }
    }
  `;

  async listCars(carQuery: any): Promise<Car[]> {
    const fields = carQuery.fields.split(',');
    let data = `
        {
            car(country: NG, limit: 1) {
              list {
                id
                internalId
                sourceCarID
                make
                model
                trim
                trimDetails
                year
                mileage
                color
                vin
                licensePlate
                type
                country
                locationTrackerID
                handoverFromSellerAt
                handoverToBuyerAt
                ##contacts
                ##status
                ##location
                financialDetails {
                  id
                  carId
                  marketplacePrice
                  oldMarketplacePrice
                  marketplaceVisible
                  isFeatured
                  soldToPhoneNumber
                  availableFinancingOptions
                  chosenFinancingOption
                  confirmedAt
                  marketplaceImages {
                    id
                    description
                  }
                  ##financialDetails
                }
                ##paperwork
                createdAt
                updatedAt
                deletedAt
                ##document
                ##inspection
                createdByName
                createdById
                updatedByName
                updatedById
                deletedByName
                deletedById
                availableForPickup
                engineNumber
                registeredCity
                technicalCheckExpiration
                ##warning
                refurbishmentStatus
                openTasks
                pickUpFrom
                bookingId
                grade
                bodyType
              }
              count
            }
        }
        `;

    if (fields.includes('contacts')) {
      data = data.replace('##contacts', this.contacts);
    }

    if (fields.includes('status')) {
      data = data.replace('##status', this.status);
    }

    if (fields.includes('location')) {
      data = data.replace('##location', this.location);
    }

    if (fields.includes('financialDetails')) {
      data = data.replace('##financialDetails', this.financialDetails);
    }

    if (fields.includes('paperwork')) {
      data = data.replace('##paperwork', this.paperwork);
    }

    if (fields.includes('inspection')) {
      data = data.replace('##inspection', this.inspection);
    }

    if (fields.includes('warning')) {
      data = data.replace('##warning', this.warning);
    }
    const resp: any = await this.sendRequest('car', data);
    const cars: Car[] = resp.data.car.list;
    return cars;
  }
}
