<div class="containerC row">
  <div class="col1 col-lg-6 mt-3">
    <div class="cardCredit m-auto">
      <div class="front">
        <div class="type">
          <img class="bankid" src="assets/img/card/default.svg" data-name="default" />
        </div>
        <span class="chip"></span>
        <span class="card_number">&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;
          &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; </span>
        <div class="date"><span class="date_value">MM / AAAA</span></div>
        <span class="fullname">NOMBRE COMPLETO TITULAR</span>
      </div>
      <div class="back">
        <div class="magnetic"></div>
        <div class="bar"></div>
        <span class="seccode">&#x25CF;&#x25CF;&#x25CF;</span>
        <span class="chip"></span><span class="disclaimer">Esta tarjeta es propiedad de Banco XXXX of Coorporación XXXX.
          <br>Si la encuentra, devuélvalo a Banco XXXX of Coorporación XXXX, 12345 México</span>
      </div>
    </div>
  </div>

  <div class="col2 col-lg-6 mt-3">
    
    <div class="infoTarjeta m-auto w-75">

      <div class="row">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control number" id="numTarjeta" name="numTarjeta"
            placeholder="Número de Tarjeta" maxlength="19" require autocomplete="off"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
          <label for="numTarjeta" title="Número de Tarjeta" data-title="Número de Tarjeta">Número de Tarjeta</label>
        </div>
      </div>

      <div class="row">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control inputname" id="titularTarjeta" name="titularTarjeta"
            placeholder="Titular de la tarjeta" require autocomplete="off"
            onkeyup="javascript:this.value=this.value.toUpperCase();" />
          <label for="titularTarjeta" title="Titular de la tarjeta" data-title="Titular de la tarjeta">Titular de la
            tarjeta</label>
        </div>
      </div>

      <div class="row">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control expire" id="fechaTarjeta" name="fechaTarjeta" placeholder="MM/AAAA"
            require autocomplete="off" />
          <label for="fechaTarjeta" title="Fecha de Expiración" data-title="Fecha de Expiración">Fecha de
            Expiración</label>
          <div class="form-text">MM/AAAA</div>
        </div>
      </div>

      <div class="row">
        <div class="form-floating text-muted field Ajusttex">
          <input type="text" class="form-control ccv" id="cvv" name="cvv" placeholder="CVV" maxlength="3" require
            autocomplete="off" onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
          <label for="numTarjeta" title="CVV" data-title="CVV">CVV</label>
        </div>
      </div>

    </div>

  </div>

</div>