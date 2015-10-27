import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import makeTranslatable from '../HoC/makeTranslatable';
import Alert from '../common/Alert';
import TextInput from '../common/TextInput';
import SubmitInput from '../common/SubmitInput';

@makeTranslatable
export default class CartCoupon extends Component {
  render() {
    return (
      <div className="b-cart__action__col-code">
        <TextInput
          className="b-cart__action__code"
          name="coupon_code"
          placeholder={t('vendor.placeholders.coupon')}
        />
        <SubmitInput
          className="b-cart__action__submit b-btn"
          name="commit"
          value={t('vendor.order.submit')}
        />
        <Alert
          className="coupon-info"
          info={true}
          text="Купон 'd' НЕ действующий"
        />
      </div>
    );
  }
}



// $ ->
//   CurrentCoupon = null

//   handler = (e) ->
//     value = $(e.target).val()

//     return if value==CurrentCoupon

//     CurrentCoupon = value
//     unless value? && value!=''
//       CouponInfo undefined
//       return


//     CouponInfo I18n.t('vendor.coupon.checking')
//     CouponRepository.check
//       code: value
//       success: (data) ->
//         CurrentCoupon = value
//         if data? && data.isActual
//           CouponInfo I18n.t('vendor.coupon.discount', discount: data.discount)
//         else
//           CouponInfo I18n.t('vendor.coupon.invalid', value: value)

//       error: (data) ->
//         CouponInfo I18n.t('vendor.coupon.error')

//   $coupon_input = $ '[coupon-input]'
//   $coupon_input.blur handler
//   $coupon_input.on 'keyup', handler

//   if $coupon_input.length>0
//     handler target: $coupon_input

// CouponInfo = (text) ->
//   $info = $('[coupon-info]')
//   $info.text text
//   if text?
//     $info.addClass 'alert alert-info'
//   else
//     $info.removeClass 'alert alert-info'


// CouponRepository=
//   check: ({code, success, error}) ->
//     $.ajax
//       type: 'POST'
//       url: gon.public_api_url + '/v1/coupon/call.json'
//       data:
//         code: code
//       success: success
//       error:   error
